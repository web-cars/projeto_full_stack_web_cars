import AppDataSource from "../../data-source";
import { Users } from "../../entities/users.entity";
import { AppError } from "../../errors/errors";
import { randomUUID } from "node:crypto";
import { resetPasswordTemplate, sendEmail } from "../../utils/sendEmail.utils";

export const sendEmailService = async (
  email: string,
  protocol: string,
  host: string
): Promise<string> => {
  const usersRepository = AppDataSource.getRepository(Users);

  const user = await usersRepository.findOneBy({ email });

  if (!user) throw new AppError("User not found.", 404);

  const resetToken = randomUUID();

  await usersRepository.save({
    ...user,
    resetToken,
  });

  const resetTemplate = resetPasswordTemplate(
    email,
    user.name,
    protocol,
    host,
    resetToken
  );

  await sendEmail(resetTemplate);

  return resetToken;
};

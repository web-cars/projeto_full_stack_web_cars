import * as z from "zod";

const schema = z.object({
  name: z.string().regex(/^[aA-zZ\s]+$/, { message: "Somente letras são permitidas neste campo" }).nonempty("Campo obrigatório"),
  email: z.string().email("Email inválido").nonempty("Campo obrigatório"),
  cpf: z.string().regex(/([0-9]{2}[.]?[0-9]{3}[.]?[0-9]{3}[/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[.]?[0-9]{3}[.]?[0-9]{3}[-]?[0-9]{2})/, { message: "CPF inválido" }).nonempty("Campo obrigatório"),
  cellPhone: z.string().regex(/^\s*(\d{2}|\d{0})[-. ]?(\d{5}|\d{4})[-. ]?(\d{4})[-. ]?\s*$/, { message: "Telefone inválido" }).nonempty("Campo obrigatório"),
  birthdate: z.date().min(new Date(new Date().setUTCFullYear(new Date().getUTCFullYear() - 18)), { message: "Você não possui 18 anos" }),
  password: z.string().min(8, { message: "A senha deve ter ao menos 8 caracteres" }).regex(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*_-])/g, { message: "Formato: 8 caracteres, 1 letra maiúscula, 1 letra minúscula, 1 número, e 1 caracter especial" }),
  confirmPassword: z.string().nonempty("Você precisa confirmar a senha!")
}).superRefine(({ confirmPassword, password }, ctx) => {
    if (confirmPassword !== password) {
      ctx.addIssue({
        code: "custom",
        message: "As senhas estão diferentes"
      });
    }
  });;

export default schema
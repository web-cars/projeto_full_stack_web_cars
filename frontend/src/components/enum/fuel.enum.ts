export enum TipoDeVeiculo {
  Flex = 1,
  Híbrido = 2,
  Elétrico = 3,
}

export function obterTipoDeVeiculo(input: string): TipoDeVeiculo {
  switch (input.toLowerCase()) {
    case "híbrido":
      return TipoDeVeiculo.Híbrido;
    case "elétrico":
      return TipoDeVeiculo.Elétrico;
    default:
      return 1;
  }
}

import { CalcularParcelamento } from "@gstore/core";

export default function useParcelamento(valor: number, qtdeParcelas: number = 12) {
    const parcelamento = new CalcularParcelamento().executar(valor, qtdeParcelas);
    return parcelamento
}
import { AlimentoCombo } from './alimento-combo';
export interface Combo {
    Alimentos: Array<AlimentoCombo>;
    ComboId: number;
    ComboNombre: string;
    gx_md5_hash?: string;
}

export interface IProductionItem{
    id: number;
    name: string, 
    code: string,
    unit: string,
    unitAbbrv: string,
    type: ProductionItemType
}

export enum ProductionItemType {
    RawMaterial = 0,
    Reject = 1,
    SubProduct = 2,
    FinalProduct = 3
}

export interface IGenealogyState {
    productionItems: IProductionItem[]
}
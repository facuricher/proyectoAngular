export interface Producto {
    id:string;
    site_id:string;
    title:string;
    price:number;
    thumbnail:string;
    plain_text:string;
    pictures:[
        {
            [k:string]:any//string | number
        }
    ]
}

export interface ResponseProducto{
    site_id:string;
    query?:string;
    results:Producto[]
}
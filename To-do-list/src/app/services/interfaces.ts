export interface ToDo{
    todo_list :ListArray[];
    total_do:number,
}

export interface ListArray {
    doType:string,
    id:number,

}

export interface AlertOptions{
    titile?:string,
}
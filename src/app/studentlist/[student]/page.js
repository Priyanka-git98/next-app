"use client"

export default function Student({params}){
    console.log(params);
    return(
        <div>
            <h3>Student details</h3>
            <h2>id:{params.student}</h2>
        </div>
    )
}
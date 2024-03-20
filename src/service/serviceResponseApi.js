import React from "react";

export async function serviceResponseApi (){
    const url_Response ='http://localhost:3000/tickets';

    const petitionData = {
        method: 'GET',
        headers: { "Content-Type": "application/json" } 
    }

    try{
        const responseForm = await fetch (url_Response, petitionData);
        const responseFormData = await responseForm.json();
        console.log("y:")
        console.log(responseFormData);
        return responseFormData


    }catch (error){
        console.log("no", error)
        throw error;
    }


}

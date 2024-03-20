export async function serviceApi(formData){

    const url ='http://localhost:3000/tickets';

    const petition = {
        method:"POST",
        headers:{"Content-Type": "application/json"} ,
        body: JSON.stringify(formData)
    }

    try{
        let response = await fetch (url, petition);
        const responseData = await response.json();
        console.log("smoke:",responseData)
        return responseData

    }catch (error) {
        console.log("There is an error", error)
    }

}

import axios, { type AxiosResponse } from "axios";

interface Todo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

const fetchData = async () => {
    try {
        const response: AxiosResponse<Todo> = await axios.get(
            "https://jsonplaceholder.typicode.com/todos/1"
        );
        console.log(response.data);
    } catch (error: any) {
        if (axios.isAxiosError(error)) {
            console.log("Axios error:", error.message);
            if (error.response) {
                console.log("error.response.status:");
            }
        }
    }
};

// Fetching data from an API basics
axios.get("https://api.example.com/data").then((Response) => {
    console.log(Response.data);
});

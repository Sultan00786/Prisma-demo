
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// async function creatUser(email:string, password:string ) {
//     const res = await prisma.user.create({
//         data: {
//             email: email,
//             password: password
//         }
//     })

//     console.log(res);
// }

// creatUser("hellow22@gmail.com", "00000")

type acc = {
    email:string, 
    password:string 
}

async function updateAcc(id:number, obj:acc) {
    const res = await prisma.user.update({
        data: {
            email: obj.email,
            password: obj.password
        },
        where: {
            id: id
        },
    })

    console.log(res);
}

updateAcc(2, {
    email: "hellow22@gmail.com",
    password: "1111"
})




// Dynamic routing

import Link from "next/link";

export default function StudentList() {
    return (
        <div>
            <h3>Student List</h3>
            <ul>
                <li>
                   <Link href="/studentlist/1"> Peter</Link>
                </li>
                <li>
                    <Link href="./studentlist/2"> Sam</Link>
                </li>
                <li>
                   <Link href="./studentlist/3"> Ram</Link>
                </li>
                <li>
                    <Link href="./studentlist/4">Anil</Link>
                </li>
            </ul>
        </div>
    )
}

// "use client";
// import Link from "next/link";

// export default function StudentList() {
//   const students = ["Anil", "Sam", "Peter", "Burce"];
//   return (
//     <div>
//       <h1>Student List</h1>
//       <ul>
//         {students.map((user) => {
//           return <li>{<Link href={"/studentlist/" + user}>{user}</Link>}</li>;
//         })}
//       </ul>
//     </div>
//   );
// }
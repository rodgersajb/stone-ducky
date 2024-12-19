


// import Image from "next/image";
// import Link from "next/link";

// export default async function Blog() {
//   const res = await fetch("http://localhost:3001/api/contentful");
//   const data = await res.json();
//   console.log(data.items, "DATA");
//   return (
//     <main>
//       <h1>Blog Posts</h1>
//       <ul>
//         {data.items.map((post) => (
//           <li key={post.sys.id}>
//             <h1>{post.fields.title}</h1>
//             <h2>{post.fields.description}</h2>
//             <Image
//               src={
//                 post.fields.images.fields.file.url.startsWith("//")
//                   ? `https:${post.fields.images.fields.file.url}`
//                   : post.fields.images.fields.file.url
//               }
//               alt={post.fields.title}
//               width={600}
//               height={400}
//             />
            
         
//           </li>
//         ))}
//       </ul>
//     </main>
//   );
// }

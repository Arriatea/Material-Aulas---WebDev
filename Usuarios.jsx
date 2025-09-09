import  {useEffect, useState} from "react";
export default function Usuarios() {
  const [usuarios, setUsuarios] = useState ([]) // Sunção que atualiza o estados

  
  useEffect (() => { 
    fetch("https://jsonplaceholder.typicode.com/users")// Puxa a API
    .then((response) => response.json())// Trasnforam os dados da API em JSON
    .then(data => setUsuarios(data)) 
    .catch( error => console(error))// Pega o erro
    .finally(console.log("Acabou"))// Sinaliza que chegou ao fim
  },[]) // [] => é o parametro para dizer quando sera refeito a busca



  return (
    <div className="p-6 flex-1 bg-gray-100">
      <h1 className="text-2xl font-bold">Usuários</h1>
      {usuarios.map((pegaItem) => (// Percorre os usuarios pegando apenas o Value "name" de cada objeto
        <div key={pegaItem.id}>
          <p>{pegaItem.name}</p>
          <p>{pegaItem.email}</p>
          <p>{pegaItem.adress.street}</p>
        </div>
      ))}
    </div>
  );
}

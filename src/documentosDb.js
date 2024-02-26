import { documentosColecao } from "./dbConnect.js";

  //o find do mongoDb retorna um cursor, devemos transforma-lo em array
  function obterDocumentos() {
    const documentos = documentosColecao.find().toArray();
  
    return documentos;
  };

function encontrarDocumento(nome) {
    const documento = documentosColecao.findOne({
          nome
      });
  
    return documento;
  };

function atualizaDocumento(nome, texto) {
  const atualizacao = documentosColecao.updateOne({
    nome
  }, 
  // O segundo parâmetro também será um objeto, que indicará qual atualização deve ser feita no documento. 
  // Depois de encontrar o documento cuja propriedade nome é igual ao parâmetro nome, queremos definir o texto desse documento. 
  // Para fazer essa definição, usaremos o $set.
  // O valor do $set será um objeto também, 
  // porque queremos definir nosso documento como um objeto com a propriedade texto igual ao texto que recebemos por parâmetro também.
  // O MongoDB verificará que o documento no banco de dados é um objeto também e que estamos passando um objeto e mesclará os dois. 
  // Já que passamos a propriedade texto, ele atualizará o texto. As demais propriedades serão mantidas.
  {
    $set: {
      texto
    }
  });
  return atualizacao;
};

  export {encontrarDocumento, atualizaDocumento, obterDocumentos };
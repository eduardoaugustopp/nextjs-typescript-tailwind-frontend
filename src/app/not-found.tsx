export default function EmConstrucao() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-black"></div>
      <h1 className="text-4xl font-bold text-black mt-4">Em Construção</h1>
      <p className="text-lg text-gray-500 mt-2">Estamos preparando essa página!</p>
      <a href="/" className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg">Voltar ao Início</a>
    </div>
  );
}
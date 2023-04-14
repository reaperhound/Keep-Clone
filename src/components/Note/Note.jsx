
export default function Note({title , content }){
  return (
    <div className="w-[250px] p-5 bg-secondary min-h-[300px]  shadow-md rounded-md max-h-[400px] overflow-hidden">
      <b className="text-2xl">
        {title}
      </b>
      <div className="h-3" />
      <p>{content.substring(0,344)}</p>
    </div>
  )
}
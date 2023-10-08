export default function AddTopic () {
 return (
    <form className="flex flex-col gap-3 ">
        <input
         type="text" 
        placeholder="Topic Tittle"
        className="border border-slate-500 px-8 py-2"
        />

        <input 
        type="text" 
        placeholder="Topic Description"
         className="border border-slate-500 px-8 py-2"
        />
        <button className="bg-green-600 font-bold text-white px-6 py-3 w-fit">
         Add Topic
        </button>
    </form>
 )
};
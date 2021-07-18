function Form(){
    return(
        <div className="bg-gray-700 mt-2">
            <div className="px-64 pt-10">
                <form className="bg-gray-300 text-gray-700 px-10 grid grid-cols-2 py-5 rounded-xl text-sm shadow-lg">
                    <div className="py-2 flex flex-col mr-64">
                        <label className="font-bold">NAME:</label>
                        <input type="text" name="name"/>
                    </div>
                    <div className="py-2 flex flex-col mx-32">
                        <label className="font-bold">PHONE NUMBER:</label>
                        <input type="number" name="phone"/>
                    </div>
                    <div className="py-2 flex flex-col mr-64">
                        <label className="font-bold">EMAIL ADDRESS:</label>
                        <input type="text" name="email"/>
                    </div>
                    <div className="py-2 flex flex-col mx-32">
                        <label className="font-bold">COUNTRY:</label>
                        <input type="text" name="country"/>
                    </div>
                    <div className="py-2 col-span-2 flex flex-col mr-32">
                        <label className="font-bold">MESSAGE: </label>
                        <input type="text" name="message" placeholder="Type your message here"/>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Form;
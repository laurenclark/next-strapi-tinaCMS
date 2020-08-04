export default function Button({ children, handler }) {
    return (
        <button
            className="bg-white hover:bg-gray-200 text-black font-bold py-2 px-4 rounded shadow"
            onClick={handler}
        >
            {children}
        </button>
    )
}

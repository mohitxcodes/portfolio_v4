

export default function Timeline() {
    return (
        <>
            <div className="absolute left-3 md:left-4 sm:left-6 top-0 bottom-0 w-0.5">

                <div className="absolute inset-0 bg-gradient-to-b from-gray-300 via-gray-400 to-gray-300 
                            dark:from-gray-600 dark:via-gray-500 dark:to-gray-600" />
                <div className="absolute inset-0 bg-gradient-to-b from-gray-300 via-gray-400 to-gray-300 
                            dark:from-gray-600 dark:via-gray-500 dark:to-gray-600 opacity-50 blur-sm" />
                <div className="absolute inset-0 bg-gradient-to-b from-gray-300 via-gray-400 to-gray-300 
                            dark:from-gray-600 dark:via-gray-500 dark:to-gray-600 opacity-25 blur-md" />
            </div>
        </>
    )
}

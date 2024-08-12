
import { PropsWithChildren } from "react"

const Alert = ({ children }: PropsWithChildren) => {
    return(
        <div
            className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 text-center"
        >
            <span
                className="font-medium uppercase"
            >{children}</span>
        </div>
    )
}

export default Alert
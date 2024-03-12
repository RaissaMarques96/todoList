import {LucideIcon} from 'lucide-react'
import {ButtonHTMLAttributes} from 'react'
import './style.scss'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    title: string
    Icon: LucideIcon
}

export function Button({ title, Icon, ...rest} : ButtonProps) {
    return (
        <button { ...rest} id='btn'>
        {Icon && <Icon/>}
        {title}
        </button>
    )
}
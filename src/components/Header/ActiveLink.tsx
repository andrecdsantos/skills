import Link from 'next/link'

const ActiveLink = ( {children, href, pathName, toggleNav, hidden}) => {
  return (
    <Link href={href} className={`${pathName === href ? 'bg-teal-200' : 'bg-purple-300'} hover:bg-teal-200 py-3 px-5 rounded-3xl ${hidden}`} onClick={toggleNav}>{children}</Link>
  )
}

export default ActiveLink
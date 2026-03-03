interface Props {
  name? : string;
  color? : string;
}

export const Hello = ({name = 'Guest', color =  'blue'} : Props) => {
  return (
    <div style={{color}}>Hellow, {name}</div>
  )
}

export default Hello;

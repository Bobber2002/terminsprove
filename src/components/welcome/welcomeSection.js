const Section = ({children, classes}) => {
  return ( 
      <section className={`w-full h-1/2 flex flex-col-reverse ${classes}`}>
        {children}
      </section>
   );
}
 
export default Section;
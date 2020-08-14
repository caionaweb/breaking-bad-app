// HOC's composition
const compose = (...functions) => (component) =>
  functions.reduceRight((wrappedComponent, hoc) => hoc(wrappedComponent), component);

export default compose;

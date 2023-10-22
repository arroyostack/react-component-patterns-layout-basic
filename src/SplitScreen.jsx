
const SplitScreen = ( { children, leftWeigh = 1, rightWeigh = 1 } ) => {
    const [ left, right ] = children;
    return (
        <main className="container-fluid d-flex">
            <aside className={ `flex-grow-${ rightWeigh } bg-secondary text-white` }>
                { left }
            </aside>
            <section className={ `flex-grow-${ leftWeigh } bg-dark text-white` }>
                { right }
            </section>
        </main>
    );
};


export default SplitScreen;
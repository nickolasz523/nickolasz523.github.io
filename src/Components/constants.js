export const PageTransition = {
    in: {
        opacity: 1,
        y: 0,
    },
    out: {
        opacity: 0,
        y: -100 ,
    }
};

export const activeStyle = {
    display: 'grid',
    gridTemplateColumns: 'auto',
    margin: 0,
    width: '100%',
    position: "absolute",
    background: '#131313',
    top: '100%',
    opacity: 1,
    transition: 'all 0.5s ease',
    zIndex: 99,
    height: '60vh',
    fontSize: '1.6rem',
}

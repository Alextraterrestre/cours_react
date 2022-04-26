const Card = ({source,title,dim}) => (
    <div className="col-12 col-md-4">
    <div className="card">
        <img className="img-fluid mb-2 card-img-top" src={source} alt={title} />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">width: {dim.width}px</p>
                <p className="card-text">height: {dim.height}px</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet quisquam dicta, nesciunt dolor iusto corrupti eligendi tempora natus quam fugit sequi pariatur, nisi illum reprehenderit odit alias eos! Voluptatum rerum aliquid sunt libero quasi cumque distinctio eum blanditiis, maiores, consequatur perspiciatis quod amet, nihil fuga suscipit eos ad alias at. Est fugit ut exercitationem maiores debitis, eligendi facere suscipit incidunt, accusantium, magni nesciunt mollitia aspernatur esse? Obcaecati odit fugit mollitia iusto pariatur ex doloribus minima.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    </div>
)
export default Card
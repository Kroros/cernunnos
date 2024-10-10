interface Props {
    head: string;
    text: string;
}

const Paragraph = ({text, head}: Props) => {
    return (
      <>
        <div className="paragraph">
          <p className="paragraphTitle">{head}</p>
          <p className="paragraphText">
            {text}
          </p>
        </div>
      </>
    );
}

export default Paragraph;
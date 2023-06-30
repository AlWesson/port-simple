import Iframe from "react-iframe";

export function Resume() {

    return (
        <div>
            <h3 style={{textAlign: 'center', fontFamily: 'monospace' ,fontSize: '30px', color: 'dimgray' }}> Resume </h3>

            <div>
                <Iframe 
                url="https://docs.google.com/document/d/1ZJg390EZw2v-VoPXdzlor6kbjYDyDYXxfzeH0mKIqlA/edit?usp=sharing" 
                width='100%'
                height='100%'
                position='absolute'
                />
            </div>
        </div>
    )
}

export default Resume;
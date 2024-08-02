import RandomTab from "../components/project-10/RandomTab";
const tabs = [
    {
        id : 1,
        title : 'Tab 1',
        content : 'This is first tab content'
    },
    {
        id : 2,
        title : 'Tab 2',
        content : <RandomTab />
    },
    {
        id : 3,
        title : 'Tab 3',
        content : 'This is the last tab content'
    }
];

export default tabs;
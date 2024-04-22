const Results = (props) => {
    const {repos } = props;
    console.log('repos is:', repos.data)

const listRepos = repos.length !== 0 ? (
    repos.data.map((item) => <li key={item.id} >{item.name}</li>)
): (
<li>No repos found</li>
)

    return (
    <ul>
        {listRepos}
    </ul>
    )
   
}
 export default Results
function ListContent () {
  const data = [
    {
      id: 1,
      features: 'Real-Time Attendance Tracking',
      des: 'Automatically record staff entry and exit times with precision.'
    },
    {
      id: 2,
      features: 'Task & Work Activity Logging',
      des: 'Monitor and manage work progress efficiently.'
    },
    {
      id: 3,
      features: 'Automated Reports & Analytics',
      des: 'Generate detailed insights into staff performance and work hours.'
    },
    {
      id: 4,
      features: 'Cloud-Based & Secure',
      des: 'Access records anytime, anywhere with secure cloud storage.'
    },
    {
      id: 5,
      features: 'User-Friendly Dashboard',
      des: 'Intuitive interface for both employers and employees.'
    }
  ]
  return (
    <div>
      <ul>
        {data?.map((d, i) => (
          <li key={i} className='sn__listContent__parent '>
            <h5>{d?.features}</h5>
            <p>{d?.des}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ListContent

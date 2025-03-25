function HeroAppInfo () {
  const data = [
    {
      id: '01',
      property: 'App Download',
      value: '10k+'
    },
    {
      id: '02',
      property: 'User Rating',
      value: '4.5/5'
    },
    {
      id: '03',
      property: 'Active Users',
      value: '1M+'
    }
  ]

  return (
    <div className="sn__hero__appInfo__parent">
      {data?.map((d, i) => (
        <div key={i}>
          <h4>{d?.value}</h4>
          <p>{d?.property}</p>
        </div>
      ))}
    </div>
  )
}

export default HeroAppInfo

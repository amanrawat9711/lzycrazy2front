export default function Services() {
  return (
    <div className="max-w-5xl mx-auto py-10 px-6">
      <h1 className="text-3xl font-bold mb-6 text-center">What We Provide</h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-gray-800">
        {[
          'Advertising',
          'Brand Promotion',
          'Cine',
          'Digital Marketing',
          'E-Commerce',
          'Entertainment',
          'Global & Customized Advertising',
          'Graphic & Animation',
          'Real Estate',
          'Sell your own product',
          'Vehicle',
          'Web & App Development'
        ].map(service => (
          <li key={service} className="bg-gray-100 p-4 rounded shadow text-center font-medium">{service}</li>
        ))}
      </ul>
    </div>
  )
}
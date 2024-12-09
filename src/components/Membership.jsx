function Membership() {
  return (
    <div className="py-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Membership Plans</h2>
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-lg shadow-xl overflow-hidden">
            <div className="px-6 py-8">
              <h3 className="text-2xl font-bold text-center mb-4">Monthly Membership</h3>
              <div className="text-center mb-6">
                <span className="text-4xl font-bold">₹1,500</span>
                <span className="text-gray-600">/month</span>
              </div>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Access to all member benefits
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Invitations to special events
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Priority mentorship access
                </li>
              </ul>
              <div className="mt-8">
                <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors">
                  Join Now
                </button>
              </div>
            </div>
            <div className="bg-gray-50 px-6 py-4">
              <p className="text-center text-gray-600">
                Special Offer: Sign up for 6 months and get 1 month free!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Membership;
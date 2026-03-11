import React, { use } from 'react';

const Tickets = ({ fetchPromise }) => {

    const ticketsData = use(fetchPromise);

    const statusStyle = {
        Open: "bg-green-100 text-green-700",
        "In Progress": "bg-yellow-100 text-yellow-700"
    };
    const priorityStyle = {
        High: "text-red-500",
        Medium: "text-yellow-500",
        Low: "text-green-500"
    };

    return (
        <div className="w-11/12 mx-auto py-6">

      {/* 3 column grid */}
      <div className="grid lg:grid-cols-3 gap-8">

        {/* LEFT SIDE (tickets) */}
        <div className="lg:col-span-2">

          <h2 className="text-xl font-semibold mb-4">
            Customer Tickets
          </h2>

          {/* ticket cards */}
          <div className="grid md:grid-cols-2 gap-5">

            {ticketsData.map(ticket => (

              <div key={ticket.id} className="bg-white shadow-md rounded-lg p-5">

                <div className="flex justify-between items-start">

                  <h3 className="font-semibold">
                    {ticket.title}
                  </h3>

                  <span className={`px-3 py-1 text-sm rounded-full ${statusStyle[ticket.status]}`}>
                    {ticket.status}
                  </span>

                </div>

                <p className="text-gray-500 text-sm mt-2">
                  {ticket.description}
                </p>

                <div className="flex justify-between mt-4 text-sm">

                  <div className="flex gap-3">
                    <span className="text-gray-400">
                      #{ticket.id}
                    </span>

                    <span className={`font-semibold ${priorityStyle[ticket.priority]}`}>
                      {ticket.priority.toUpperCase()} PRIORITY
                    </span>
                  </div>

                  <div className="flex gap-3 text-gray-400">
                    <span>{ticket.customer}</span>
                    <span>{ticket.date}</span>
                  </div>

                </div>

              </div>

            ))}

          </div>
        </div>


        {/* RIGHT SIDE (task status) */}
        <div>

          <h2 className="text-xl font-semibold mb-2">
            Task Status
          </h2>

          <p className="text-sm text-gray-500 mb-6">
            Select a ticket to add to Task Status
          </p>

          <div className="bg-white shadow-md rounded-lg p-5">

            <h3 className="font-semibold mb-2">
              Resolved Task
            </h3>

            <p className="text-gray-500 text-sm">
              No resolved tasks yet.
            </p>

          </div>

        </div>

      </div>

    </div>
    );
};

export default Tickets;
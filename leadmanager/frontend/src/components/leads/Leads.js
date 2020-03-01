import React, { useEffect } from "react";

// connect components with redux
import { connect } from "react-redux";

// prop types
import PropTypes from "prop-types";

// actions
import { getLeads } from "../../actions/leads";

// Components
import Lead from "./Lead";

const Leads = ({ getLeads, leads }) => {
  useEffect(() => getLeads(), []);
  return (
    <section className="leads">
      <div className="container">
        <h1>Leads List</h1>
        <hr />
        <div className="row">
          {leads.map(lead => (
            <Lead
              key={lead.id}
              name={lead.name}
              email={lead.email}
              message={lead.message}
              createdAt={lead.created_at}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const mapStateToProps = state => ({
  leads: state.leads.leads
});

Leads.propTypes = {
  leads: PropTypes.array.isRequired
};

export default connect(mapStateToProps, { getLeads })(Leads);

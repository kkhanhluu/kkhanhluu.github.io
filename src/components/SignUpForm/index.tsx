import * as React from 'react';
import './signUpForm.css';

export const SignupForm = () => (
  <form
    action="https://app.convertkit.com/forms/3028342/subscriptions"
    className="seva-form formkit-form"
    method="post"
    data-sv-form={3028342}
    data-uid="d09aa0d3d3"
    data-format="inline"
    data-version={5}
    data-options='{"settings":{"after_subscribe":{"action":"message","success_message":"Success! Now check your email to confirm your subscription.","redirect_url":""},"analytics":{"google":null,"facebook":null,"segment":null,"pinterest":null,"sparkloop":null,"googletagmanager":null},"modal":{"trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15},"powered_by":{"show":false,"url":"https://convertkit.com/features/forms?utm_campaign=poweredby&utm_content=form&utm_medium=referral&utm_source=dynamic"},"recaptcha":{"enabled":false},"return_visitor":{"action":"show","custom_content":""},"slide_in":{"display_in":"bottom_right","trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15},"sticky_bar":{"display_in":"top","trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15}},"version":"5"}'
    min-width="400 500 600 700 800"
    style={{ backgroundColor: 'rgb(255, 255, 255)', borderRadius: '6px' }}
  >
    <div data-style="full">
      <div
        data-element="column"
        className="formkit-column"
        style={{ backgroundColor: 'rgb(249, 250, 251)' }}
      >
        <div className="formkit-background" style={{ opacity: '0.3' }} />
        <div
          className="formkit-header"
          data-element="header"
          style={{ color: 'rgb(77, 77, 77)', fontSize: '20px', fontWeight: 700 }}
        >
          <h2>Subscribe to the Newsletter</h2>
        </div>
        <div
          className="formkit-subheader"
          data-element="subheader"
          style={{ color: 'rgb(104, 104, 104)', fontSize: '15px' }}
        >
          Subscribe to get our latest content by email.
        </div>
        <div
          className="formkit-image formkit-image relative focus:outline-none"
          role="button"
          tabIndex={0}
        >
          <img
            className="cursor-pointer focus:outline-blue "
            src="https://embed.filekitcdn.com/e/eN7pkG2QGRdEpSGwFtSVkq/nvqU4U5Rsr6M2NshCfTVx2"
            style={{ maxWidth: '100%' }}
          />
        </div>
      </div>
      <div data-element="column" className="formkit-column">
        <ul
          className="formkit-alert formkit-alert-error"
          data-element="errors"
          data-group="alert"
        />
        <div data-element="fields" className="seva-fields formkit-fields">
          <div className="formkit-field">
            <input
              className="formkit-input"
              aria-label="Name"
              name="fields[first_name]"
              required
              placeholder="Name"
              type="text"
              style={{
                color: 'rgb(0, 0, 0)',
                borderColor: 'rgb(227, 227, 227)',
                borderRadius: '4px',
                fontWeight: 400,
              }}
            />
          </div>
          <div className="formkit-field">
            <input
              className="formkit-input"
              name="email_address"
              aria-label="Email Address"
              placeholder="Email Address"
              required
              type="email"
              style={{
                color: 'rgb(0, 0, 0)',
                borderColor: 'rgb(227, 227, 227)',
                borderRadius: '4px',
                fontWeight: 400,
              }}
            />
          </div>
          <button
            data-element="submit"
            className="formkit-submit formkit-submit"
            style={{
              color: 'rgb(255, 255, 255)',
              backgroundColor: 'rgb(135, 75, 239)',
              borderRadius: '24px',
              fontWeight: 700,
            }}
          >
            <div className="formkit-spinner">
              <div />
              <div />
              <div />
            </div>
            <span>Subscribe</span>
          </button>
        </div>
        <div
          className="formkit-guarantee"
          data-element="guarantee"
          style={{ color: 'rgb(77, 77, 77)', fontSize: '13px', fontWeight: 400 }}
        >
          We respect your privacy. Unsubscribe at any time.
        </div>
      </div>
    </div>
  </form>
);

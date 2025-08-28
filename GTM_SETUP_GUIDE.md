# Google Tag Manager Setup Guide

## GTM Container ID: GTM-5FRRGL6V

### 1. Google Analytics 4 Tag Setup

**Tag Configuration:**
- Tag Type: Google Analytics 4
- Measurement ID: `G-NKRHL2JHKT`
- Trigger: All Pages

**Steps:**
1. Go to [Google Tag Manager](https://tagmanager.google.com/)
2. Select container `GTM-5FRRGL6V`
3. Click "Add a new tag"
4. Choose "Google Analytics 4"
5. Enter Measurement ID: `G-NKRHL2JHKT`
6. Set trigger to "All Pages"
7. Save and publish

### 2. Web Vitals Event Setup

**Custom Event Tag:**
- Tag Type: Google Analytics 4 Event
- Event Name: `web_vital`
- Parameters:
  - `metric_name`: `{{Event Action}}`
  - `metric_value`: `{{Event Value}}`
  - `metric_id`: `{{Custom Parameter 1}}`
  - `metric_delta`: `{{Custom Parameter 2}}`

**Trigger:**
- Trigger Type: Custom Event
- Event Name: `web-vital`

### 3. Performance Events Setup

**Page Load Event:**
- Tag Type: Google Analytics 4 Event
- Event Name: `page_load_complete`
- Trigger: Custom Event `page-load-complete`

**Navigation Timing Event:**
- Tag Type: Google Analytics 4 Event
- Event Name: `navigation_timing`
- Trigger: Custom Event `navigation-timing`

### 4. GTM Preview Mode Testing

**How to test:**
1. In GTM, click "Preview"
2. Enter URL: `https://messie-wohnungen24.de`
3. Navigate through the site
4. Check that these events fire:
   - `page_view` (GA4 automatic)
   - `web_vital` (CLS, FID, LCP, FCP, TTFB)
   - `page_load_complete`
   - `navigation_timing`

**Local testing:**
1. In GTM, click "Preview"
2. Enter URL: `http://localhost:5173`
3. Test all functionality locally

### 5. Variables to Create

**Built-in Variables (enable these):**
- Event
- Event Action
- Event Category
- Event Value

**Custom Variables:**
- Custom Parameter 1: `{{dlv - custom_parameter_1}}`
- Custom Parameter 2: `{{dlv - custom_parameter_2}}`

### 6. Verification Checklist

- [ ] GA4 tag fires on all pages
- [ ] Web Vitals events are captured
- [ ] Performance metrics are tracked
- [ ] Real-time data appears in GA4
- [ ] No console errors in browser
- [ ] GTM preview shows all tags firing

### 7. Core Web Vitals Thresholds

**Good Performance:**
- LCP: < 2.5s
- FID: < 100ms
- CLS: < 0.1

**Current Site Performance:**
- LCP: ~600-800ms (Excellent)
- FID: Should be < 100ms
- CLS: Should be < 0.1

### 8. Troubleshooting

**If tags don't fire:**
1. Check GTM container is published
2. Verify GTM code is in HTML
3. Check browser console for errors
4. Use GTM preview mode
5. Check dataLayer in browser console: `console.log(dataLayer)`

**Common Issues:**
- AdBlockers blocking GTM/GA
- GDPR consent not given
- JavaScript errors preventing execution
- Incorrect trigger configuration
const amplitudeLogEvent = (eventName: string) => {
    (global as any).amplitude.getInstance().logEvent(eventName);
};

export { amplitudeLogEvent };

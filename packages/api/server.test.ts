import createApplication from "./server";
import configuration from "@apprevention/configuration";

describe("Application factory", () => {
  const configValidationSpy = jest
    .spyOn(configuration, "validate")
    .mockReturnValue(null);

  beforeEach(() => {
    jest.resetAllMocks();
  });

  it("Must not explode", () => {
    expect(() => createApplication()).not.toThrow();
  });

  it("Must validate the configuration schema", () => {
    createApplication();
    expect(configValidationSpy).toHaveBeenCalled();
  });
});
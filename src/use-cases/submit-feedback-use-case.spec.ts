import { SubmitFeedbackUseCase } from "./submit-feedback-use-case";
const createFeedbackSpy = jest.fn();
const createSendMailSpy = jest.fn();
const submitFeedback = new SubmitFeedbackUseCase(
  { create: createFeedbackSpy },
  { sendMail: createSendMailSpy }
);
describe("Submit feedback", () => {
  it("should not be able to submit a feedback without type", async () => {
    await expect(
      submitFeedback.execute({
        type: "",
        comment: "Test comment example",
        screenshot: "base64test.jpg",
      })
    ).rejects.toThrow();
  });

  it("should not be able to submit a feedback without comment", async () => {
    await expect(
      submitFeedback.execute({
        type: "BUG",
        comment: "",
        screenshot: "base64test.jpg",
      })
    ).rejects.toThrow();
  });

  it("should not be able to submit a feedback without correct screenshot format", async () => {
    await expect(
      submitFeedback.execute({
        type: "BUG",
        comment: "Test comment example",
        screenshot: "test.jpg",
      })
    ).rejects.toThrow();
  });
  it("should be able to submit a feedback", async () => {
    await expect(
      submitFeedback.execute({
        type: "BUG",
        comment: "Test comment example",
        screenshot: "base64test.jpg",
      })
    ).resolves.not.toThrow();
    expect(createFeedbackSpy).toHaveBeenCalled();
    expect(createSendMailSpy).toHaveBeenCalled();
  });
});

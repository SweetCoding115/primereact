import { DevelopmentSection } from '@/components/doc/common/developmentsection';
import { DocSectionText } from '@/components/doc/common/docsectiontext';

export function AccessibilityDoc() {
    return (
        <DevelopmentSection>
            <DocSectionText id="accessibility" label="Accessibility">
                <h3>Screen Reader</h3>
                <p>
                    Steps component uses the <i>nav</i> element and since any attribute is passed to the root implicitly <i>aria-labelledby</i> or <i>aria-label</i> can be used to describe the component. Inside an ordered list is used where the
                    current step item defines <i>aria-current</i> as "step".
                </p>

                <h3>Keyboard Support</h3>
                <div className="doc-tablewrapper">
                    <table className="doc-table">
                        <thead>
                            <tr>
                                <th>Key</th>
                                <th>Function</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <i>tab</i>
                                </td>
                                <td>Adds focus to the active step when focus moves in to the component, if there is already a focused tab header then moves the focus out of the component based on the page tab sequence.</td>
                            </tr>
                            <tr>
                                <td>
                                    <i>enter</i>
                                </td>
                                <td>Activates the focused step if readonly is not enabled.</td>
                            </tr>
                            <tr>
                                <td>
                                    <i>space</i>
                                </td>
                                <td>Activates the focused step if readonly is not enabled.</td>
                            </tr>
                            <tr>
                                <td>
                                    <i>right arrow</i>
                                </td>
                                <td>Moves focus to the next step if readonly is not enabled.</td>
                            </tr>
                            <tr>
                                <td>
                                    <i>left arrow</i>
                                </td>
                                <td>Moves focus to the previous step if readonly is not enabled.</td>
                            </tr>
                            <tr>
                                <td>
                                    <i>home</i>
                                </td>
                                <td>Moves focus to the first step if readonly is not enabled.</td>
                            </tr>
                            <tr>
                                <td>
                                    <i>end</i>
                                </td>
                                <td>Moves focus to the last step if readonly is not enabled.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </DocSectionText>
        </DevelopmentSection>
    );
}

import Markdown from "react-markdown";

const About = () => {
  return (
    <main className="container px-6 flex-1 flex flex-col">
      <div className="flex justify-center">
        <Markdown className="prose lg:prose-xl dark:prose-invert py-6">
          {`### **Novustoria** 
#### *\[no-vus-to-ri-a\]*
**Noun**

---

#### **Definition:**

1. **The Genesis of a New Epoch:**  An act or process signifying the initiation of a distinctive and novel narrative or course of events. This term is emblematic of the concept of creating a fresh, unprecedented storyline or trajectory, especially in contexts where past actions or historical events are reevaluated and reimagined with insightful deliberation.
2. **Metamorphosis of Destiny:**  Broadly, it symbolizes the metaphorical journey of altering one’s destiny or life story. "Novustoria" epitomizes the human endeavor to rectify past errors or to chart a radically different future. It is a testament to the power of transformation and renewal, emphasizing the capacity to reshape one’s history or legacy.

---

#### **Etymology:**
Derived from the Latin words *"novus"* (new) and *"historia"* (history or story), "Novustoria" conveys the fusion of beginning anew while acknowledging and learning from the past.

---

#### **Usage in a Sentence:**
"After years of adhering to a predetermined path, he embraced a moment of *novustoria*, deciding to embark on a journey around the world to rewrite his own story."

---`}
        </Markdown>
      </div>
    </main>
  );
};

export default About;

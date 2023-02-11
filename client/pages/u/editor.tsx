import dynamic from 'next/dynamic'
import { Panel, PanelGroup, PanelResizeHandle } from 'react-resizable-panels'
import { Editor as CodeMirrorEditor } from '@/components'
import { Tabs, Text, Input } from '@/components/ui'

export default function Editor() {
  return (
    <PanelGroup direction="horizontal">
      <Panel defaultSize={25}>
        <Tabs defaultValue="q1">
          <Tabs.List>
            <Tabs.Trigger value="q1">Question 01</Tabs.Trigger>
            <Tabs.Trigger value="q2">Question 02</Tabs.Trigger>
          </Tabs.List>
          <Tabs.Content value="q1">
            <Text.Large>Two Sum</Text.Large>
            <Text>
              Given an array of integers nums and an integer target, return indices of the two
              numbers such that they add up to target. You may assume that each input would have
              exactly one solution, and you may not use the same element twice. You can return the
              answer in any order.
            </Text>
            <Text>Example 1</Text>
            <Text.Blockquote>
              <div>Input: nums = [2,7,11,15], target = 9</div>
              <div>Output: [0,1]</div>
              <div>Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].</div>
            </Text.Blockquote>
            <Text>Example 2</Text>
            <Text.Blockquote>
              <div>Input: nums = [3,2,4], target = 6</div>
              <div>Output: [1,2]</div>
            </Text.Blockquote>
          </Tabs.Content>
          <Tabs.Content value="q2">
            <Text.Large>Palindrome Number</Text.Large>
            <Text>Given an integer x, return true if x is a palindrome , and false otherwise.</Text>
            <Text>Example 1</Text>
            <Text.Blockquote>
              <div>Input: x = 121</div>
              <div>Output: true</div>
            </Text.Blockquote>
            <Text>Example 2</Text>
            <Text.Blockquote>
              <div>Input: x = -121</div>
              <div>Output: false</div>
              <div>
                Explanation: From left to right, it reads -121. From right to left, it becomes 121-.
                Therefore it is not a palindrome.
              </div>
            </Text.Blockquote>
          </Tabs.Content>
        </Tabs>
      </Panel>
      <PanelResizeHandle>+</PanelResizeHandle>
      <Panel>
        <CodeMirrorEditor />
      </Panel>
      <PanelResizeHandle>+</PanelResizeHandle>
      <Panel defaultSize={25}>
        <div className="p-4 border border-slate-200">
          <div className="p-4 border border-slate-200 h-96 mb-4 rounded-sm" />
          <Input placeholder="type your message here..." className="items-end" />
        </div>
      </Panel>
    </PanelGroup>
  )
}

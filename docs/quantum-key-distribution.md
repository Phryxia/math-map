# 양자 키 분배

# 개요

**양자 키 분배(quantum key distribution)** 는 두 사람이 큐비트를 주고받아 비밀 키를 만들되, 중간에서 누가 큐비트를 엿보면 그 흔적이 오류로 드러나게 하는 규약이다. 앨리스가 $\tfrac1{\sqrt 2}(\vert 0\rangle+\vert 1\rangle)$ 을 보냈는데 도청자가 이것을 $\vert 0\rangle,\vert 1\rangle$ 기저로 측정하면 상태가 $\vert 0\rangle$ 이나 $\vert 1\rangle$ 로 바뀌고, 밥이 원래 기저로 측정하면 앨리스가 보낸 값과 다른 결과가 확률 $1/2$ 로 나온다. 양자 키 분배는 받은 비트 일부를 공개해 이런 오류의 비율을 재고, 비율이 작으면 남은 비트를 해시로 줄여 도청자가 모르는 키를 만든다.

# 직관

[양자 회로](quantum-circuits.md)의 큐비트 하나로 비트 하나를 보내는 방법이 둘 있다. $Z$ 기저에서는 $0$ 을 $\vert 0\rangle$, $1$ 을 $\vert 1\rangle$ 로 보내고, $X$ 기저에서는 $0$ 을 $\vert +\rangle=\tfrac1{\sqrt 2}(\vert 0\rangle+\vert 1\rangle)$, $1$ 을 $\vert -\rangle=\tfrac1{\sqrt 2}(\vert 0\rangle-\vert 1\rangle)$ 로 보낸다. 받는 사람이 보낸 기저와 같은 기저로 측정하면 비트가 그대로 나오고, 다른 기저로 측정하면 $0$ 과 $1$ 이 반반으로 나온다.

앨리스는 비트마다 기저를 무작위로 골라 보내고, 밥도 기저를 무작위로 골라 측정한다. 끝난 뒤 두 사람이 고른 기저만 공개로 비교해, 기저가 같았던 자리의 비트만 남긴다. 도청자는 큐비트가 지나갈 때 기저를 모르므로, 측정해 보고 결과대로 다시 만들어 보내면 절반의 자리에서 기저를 틀린다. 틀린 자리에서는 밥에게 간 상태가 바뀌어 밥의 비트가 확률 $1/2$ 로 앨리스와 달라지므로, 남긴 자리의 $1/4$ 에서 두 사람의 비트가 어긋난다.

# 정의

## BB84 규약

**BB84 규약(BB84 protocol)** 은 Bennett 과 Brassard 가 1984 년에 제시한 다음 절차다[^1].

1. 앨리스가 비트 $a\_i$ 와 기저 $\theta\_i\in\lbrace Z,X\rbrace$ 를 $i=1,\dots,N$ 마다 독립으로 고르게 뽑고, 기저 $\theta\_i$ 로 $a\_i$ 를 적은 큐비트를 보낸다.
2. 밥이 기저 $\theta'\_i$ 를 독립으로 고르게 뽑아 측정하고 결과 $b\_i$ 를 얻는다.
3. 두 사람이 인증된 공개 채널로 $\theta\_i$ 와 $\theta'\_i$ 를 비교해 $\theta\_i=\theta'\_i$ 인 자리만 남긴다. 남은 비트열을 **선별 키(sifted key)** 라 한다.
4. 선별 키의 무작위 일부를 공개해 $a\_i\ne b\_i$ 인 비율 $Q$ 를 잰다. $Q$ 를 **양자 비트 오류율(quantum bit error rate)** 이라 한다. $Q$ 가 기준보다 크면 중단한다.
5. 남은 비트에서 공개 통신으로 서로의 차이를 고치고(정보 조정, information reconciliation), 해시 함수로 짧게 줄여(비밀성 증폭, privacy amplification) 최종 키를 얻는다.

| 자리 | 앨리스의 비트 | 앨리스의 기저 | 밥의 기저 | 밥의 결과 | 남김 |
| --- | --- | --- | --- | --- | --- |
| 1 | 0 | Z | Z | 0 | 예 |
| 2 | 1 | X | Z | 0 또는 1 | 아니오 |
| 3 | 1 | X | X | 1 | 예 |
| 4 | 0 | X | Z | 0 또는 1 | 아니오 |
| 5 | 1 | Z | Z | 1 | 예 |
| 6 | 0 | Z | X | 0 또는 1 | 아니오 |

도청이 없으면 선별 키는 $011$ 이고 두 사람의 비트가 같다. 기저가 같을 확률이 $1/2$ 이므로 선별 키의 길이는 $N/2$ 근처다.

## 가로채 다시 보내는 공격

도청자가 큐비트마다 기저를 고르게 뽑아 측정하고, 얻은 비트를 그 기저로 다시 만들어 밥에게 보내는 공격을 **가로채 다시 보내는 공격(intercept-resend attack)** 이라 한다. 선별 키의 한 자리에서 도청자의 기저가 맞을 확률은 $1/2$ 이고, 틀리면 밥의 결과가 확률 $1/2$ 로 앨리스와 다르다. 따라서 이 공격에서 $Q=1/4$ 이고, 도청자가 그 자리의 비트를 맞힐 확률은 $3/4$ 이다. 위 표의 자리 $3$ 에서 도청자가 $Z$ 기저로 측정해 $\vert 0\rangle$ 을 보냈다면 밥의 $X$ 기저 측정은 $0$ 과 $1$ 을 반반으로 낸다.

# 성질

## 정보 획득과 교란

$\vert 0\rangle$ 과 $\vert +\rangle$ 처럼 직교하지 않는 두 상태를 구별하는 측정은 어느 것이든 적어도 하나의 상태를 바꾼다. 측정 뒤에도 두 상태가 그대로이면서 도청자 쪽 보조 큐비트에 서로 다른 흔적이 남는다면, 유니터리가 보존하는 내적을 비교해 그 흔적이 같아야 한다는 모순이 나온다. 이것은 [양자 순간이동](quantum-teleportation.md)의 복제 불가능 정리와 같은 논증이고, 도청자가 얻는 정보가 클수록 $Q$ 도 커진다.

## 안전한 키의 비율

도청자가 양자역학이 허용하는 어떤 공격을 하든, 선별 키의 오류율이 $Q$ 일 때 선별 키 한 비트당

$$
r=1-2h(Q),\qquad h(Q)=-Q\log_2Q-(1-Q)\log_2(1-Q)
$$

비트의 비밀 키를 뽑을 수 있다(Shor–Preskill 한계)[^2]. $h$ 는 이진 [Shannon 엔트로피](entropy.md)이고, $h(Q)$ 한 몫은 정보 조정에서 공개되는 양, 다른 한 몫은 도청자가 가질 수 있는 정보의 상한이다. $r\gt 0$ 인 범위는 $Q$ 가 약 $0.11$ 미만일 때다. 가로채 다시 보내는 공격의 $Q=1/4$ 는 이 범위 밖이므로 두 사람은 4단계에서 중단한다.

## 비밀성 증폭

5단계의 해시는 [무작위성 추출기](randomness-extractors.md)의 잔여 해시 보조정리(leftover hash lemma)를 쓴다. 정보 조정 뒤의 비트열 $X$ 가 길이 $n$ 이고 도청자가 아는 것에 대한 최소 엔트로피가 $k$ 이상이면, 공개로 고른 범용 해시 $h$ 의 출력 $h(X)$ 를 $k-2\log_2(1/\varepsilon)$ 비트로 잘랐을 때 도청자에게 균등분포와 $\varepsilon$ 이내로 구별되지 않는다. 도청자가 양자 상태를 가지는 경우에도 같은 꼴의 보조정리가 성립한다[^3].

## 공개 채널의 인증

3단계와 5단계의 공개 채널은 내용이 바뀌지 않음이 보장되어야 한다. 그렇지 않으면 도청자가 앨리스와 밥 각각과 따로 규약을 수행하는 중간자 공격이 통한다. 인증에는 두 사람이 미리 공유한 짧은 비밀 키를 쓰므로, 양자 키 분배는 짧은 공유 키를 긴 공유 키로 늘리는 규약이다.

# 활용

- 정보이론적 안전성. 최종 키를 일회용 패드(one-time pad)로 쓰면, 안전성이 계산 난이도 가정에 기대지 않는다. [Shor 알고리즘](shor-algorithm.md)이 깨는 RSA(Rivest–Shamir–Adleman)나 Diffie–Hellman 키 교환과 달리, 양자 컴퓨터가 생겨도 이미 만든 키의 안전성이 바뀌지 않는다.
- 얽힘 기반 규약. Ekert 의 규약은 앨리스가 큐비트를 보내는 대신 얽힌 쌍을 나눠 측정하고, [Bell 부등식](bell-inequality.md)의 값으로 도청을 검사한다. 장치 내부를 믿지 않는 장치 무관 양자 키 분배가 이 방향의 규약이다.
- 실제 구현. 광자 하나의 편광이나 위상에 비트를 싣는다. 약한 레이저 펄스에는 광자가 둘 이상 들어 있을 수 있어, 펄스 세기를 무작위로 바꾸는 미끼 상태(decoy state) 방법으로 그 공격을 검출한다.

[^1]: C. H. Bennett, G. Brassard, Quantum cryptography: Public key distribution and coin tossing, *Proceedings of the IEEE International Conference on Computers, Systems and Signal Processing*, Bangalore (1984), 175–179. 재수록 *Theoretical Computer Science* 560 (2014), 7–11.
[^2]: P. W. Shor, J. Preskill, Simple proof of security of the BB84 quantum key distribution protocol, *Physical Review Letters* 85 (2000), 441–444.
[^3]: R. Renner, R. König, Universally composable privacy amplification against quantum adversaries, *Theory of Cryptography Conference*, Lecture Notes in Computer Science 3378 (2005), 407–425.

# 연관 문서

## 선수지식

- [양자 회로](quantum-circuits.md)
- [무작위성 추출기](randomness-extractors.md)

## 더 알아보기

아직 연결한 문서가 없다.

#computation #cryptography #information_theory

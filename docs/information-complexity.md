# 정보 복잡도

# 개요

**정보 복잡도(information complexity)** 는 두 사람이 대화로 함숫값을 계산할 때 대화가 상대의 입력에 대해 드러내는 정보의 양이다. Alice 와 Bob 이 각자 $\lbrace 1,\dots,n\rbrace$ 의 부분집합을 갖고 두 집합이 겹치는지 묻는다. 좌표 하나마다 "둘 다 그 원소를 가졌는가" 를 판정해야 하니 대화가 $n$ 에 비례해야 할 것 같지만, 보낸 비트 하나가 모든 좌표에 걸쳐 있을 수 있어서 비트 수를 좌표별로 나눠 셀 수 없다.

정보 복잡도는 비트 대신 상호정보량을 센다. 상호정보량은 독립인 좌표마다 나뉘어 더해지므로, 좌표 하나에서 드러나야 하는 정보의 하한에 $n$ 을 곱하면 대화 길이의 하한이 나온다.

# 직관

Alice 가 $x=(x_1,\dots,x_n)$ 을, Bob 이 $y=(y_1,\dots,y_n)$ 을 갖는다. $x_i=1$ 은 Alice 의 집합이 $i$ 를 가진다는 뜻이다. 두 집합이 겹치지 않는 것은 모든 $i$ 에서 $x_i\wedge y_i=0$ 인 것이다.

$n=3$, $x=110$, $y=001$ 이면 Alice 의 집합은 $\lbrace 1,2\rbrace$, Bob 의 집합은 $\lbrace 3\rbrace$ 이고 겹치지 않는다. 좌표마다 두 비트의 논리곱(AND)을 계산하면 답이 나온다.

좌표 하나의 AND 를 다음 규칙으로 계산한다. Alice 가 $a$ 를 보내고, $a=1$ 이면 Bob 이 $b$ 를 보낸다. $a=0$ 이면 답은 $0$ 이고, $a=1$ 이면 답은 $b$ 다.

입력 $(a,b)$ 가 $(0,0)$, $(0,1)$, $(1,0)$ 가운데 하나로 각각 확률 $1/3$ 로 온다고 둔다. 집합이 겹치지 않는 입력의 좌표 하나가 이런 꼴이다. 대화 기록은 다음과 같다.

| 입력 | 대화 기록 | Bob 이 대화로 새로 안 것 | Alice 가 대화로 새로 안 것 |
| --- | --- | --- | --- |
| $(0,0)$ | $0$ | $a=0$ | 없음 |
| $(0,1)$ | $0$ | 없음 | 없음 |
| $(1,0)$ | $1,0$ | $a=1$ | 없음 |

Bob 은 $b=1$ 이면 $a=0$ 임을 처음부터 안다. $b=0$ 이면 $a$ 는 $0$ 과 $1$ 이 반반이고, 대화가 그 1 비트를 알려 준다. $b=0$ 일 확률이 $2/3$ 이므로 Bob 이 얻는 정보는 평균 $2/3$ 비트다.

Alice 는 $a=1$ 이면 $b=0$ 임을 처음부터 안다. 그래서 Bob 이 보낸 $b$ 는 Alice 에게 새 정보가 아니다. 이 규칙은 최대 2 비트를 보내지만 상대에게 드러내는 정보는 합해서 $2/3$ 비트다.

좌표 셋에 이 규칙을 따로 돌리면 드러나는 정보는 $3\cdot 2/3=2$ 비트다. 좌표들이 서로 독립이면 정보는 좌표마다 더해진다. 비트 수에는 이런 덧셈이 없다.

# 정의

## 대화 기록

공개 동전과 사적 동전을 쓰는 [통신 복잡도](communication-complexity.md)의 규칙 $\pi$ 를 생각한다. 입력 $(X,Y)$ 가 분포 $\mu$ 를 따를 때, 공개 무작위 비트열과 주고받은 비트 전체를 합친 확률변수를 $\pi$ 의 **대화 기록(transcript)** $\Pi$ 라 한다.

직관 절의 규칙에서 $\Pi$ 는 확률 $2/3$ 로 $0$, 확률 $1/3$ 로 $1,0$ 이다.

## 내부 정보와 외부 정보

규칙 $\pi$ 의 **내부 정보 비용(internal information cost)** 은 다음이다.

$$
\mathrm{IC}\_\mu(\pi)=I(X;\Pi\mid Y)+I(Y;\Pi\mid X)
$$

첫 항은 Bob 이 자기 입력을 알고 있을 때 대화가 Alice 의 입력에 대해 알려 주는 양이고, 둘째 항은 그 반대다. $I$ 는 [KL divergence](kl-divergence.md) 문서에서 정의한 조건부 상호정보량이다. 직관 절의 규칙에서 첫 항은 $H(a\mid b)=2/3$, 둘째 항은 $0$ 이므로 $\mathrm{IC}\_\mu(\pi)=2/3$ 이다.

**외부 정보 비용(external information cost)** 은 대화를 지켜본 제삼자가 두 입력에 대해 얻는 양 $I(XY;\Pi)$ 다. 직관 절의 규칙은 결정적이어서 이 값은 $H(\Pi)$ 이고, $\Pi$ 가 두 값을 확률 $2/3$ 와 $1/3$ 로 가지므로 약 $0.918$ 비트다.

## 함수의 정보 복잡도

함수 $f$ 의 **정보 복잡도** $\mathrm{IC}\_\mu(f,\varepsilon)$ 는 모든 입력에서 오류 확률이 $\varepsilon$ 이하인 규칙 $\pi$ 전체에 대한 $\mathrm{IC}\_\mu(\pi)$ 의 하한이다. 정보는 분포 $\mu$ 아래에서 재고, 정확성은 모든 입력에서 요구한다.

직관 절의 $\mu$ 는 $(1,1)$ 에 확률을 주지 않는다. 그래도 $(1,1)$ 에서 답 $1$ 을 내야 하므로 $\mathrm{IC}\_\mu(\mathrm{AND},0)$ 은 $0$ 이 아니다. A. Chakrabarti, Y. Shi, A. Wirth, A. C.-C. Yao 가 외부 정보 비용으로 이 개념을 처음 썼다[^1].

# 성질

## 정보는 통신 이하

비용이 $c$ 비트인 규칙 $\pi$ 에서 다음이 성립한다.

$$
\mathrm{IC}\_\mu(\pi)\le I(XY;\Pi)\le c
$$

증명의 요지. 대화 기록을 비트 $\Pi_1,\dots,\Pi_c$ 로 쪼개고 연쇄법칙을 쓴다. $j$ 번째 비트를 Alice 가 보내면 그 비트는 $X$, 앞의 기록, Alice 의 사적 동전으로 정해지므로 $I(Y;\Pi_j\mid X,\Pi_{\lt j})=0$ 이다.

남는 항 $I(X;\Pi_j\mid Y,\Pi_{\lt j})$ 는 $I(XY;\Pi_j\mid\Pi_{\lt j})$ 이하이고, 이것은 한 비트의 엔트로피 $1$ 이하다. $j$ 에 대해 더하면 두 부등식이 나온다. 따라서 $\mathrm{IC}\_\mu(f,\varepsilon)$ 은 오류 $\varepsilon$ 의 무작위 통신 복잡도 $R_\varepsilon(f)$ 의 하한이다.

## 직합 정리

$f^n$ 은 $n$ 개 좌표에서 $f$ 를 따로 계산하는 문제이고, 입력은 곱분포 $\mu^n$ 을 따른다. M. Braverman 과 A. Rao 는 다음 **직합 정리(direct sum theorem)** 를 증명했다[^2].

$$
\mathrm{IC}\_{\mu^n}(f^n,\varepsilon)=n\cdot\mathrm{IC}\_\mu(f,\varepsilon)
$$

$\le$ 쪽은 좌표마다 최적 규칙을 따로 돌리면 된다. $\ge$ 쪽은 $f^n$ 의 규칙에서 좌표 $i$ 하나만 실제 입력으로 두고 나머지를 표본으로 채워 $f$ 의 규칙을 만든다. $i$ 보다 앞 좌표의 $X_j$ 와 뒤 좌표의 $Y_j$ 는 공개 동전으로 뽑고, 앞 좌표의 $Y_j$ 는 Bob 이, 뒤 좌표의 $X_j$ 는 Alice 가 사적 동전으로 조건부 분포에서 뽑는다. 연쇄법칙으로 $f^n$ 규칙의 정보 비용이 이 $n$ 개 규칙의 정보 비용의 합이 된다.

같은 논문은 좌표마다 오류 $\varepsilon\gt 0$ 을 허락할 때 $f^n$ 의 분포 통신 복잡도를 $n$ 으로 나눈 값의 극한이 $\mathrm{IC}\_\mu(f,\varepsilon)$ 과 같다는 것도 증명했다. 정보 복잡도는 같은 문제를 여러 번 풀 때 한 번에 드는 통신량이다.

## 서로소 판정의 선형 하한

직관 절의 문제를 서로소 함수 $\mathrm{DISJ}\_n$ 이라 한다. Z. Bar-Yossef, T. S. Jayram, R. Kumar, D. Sivakumar 는 정보 복잡도로 다음을 다시 증명했다[^3].

$$
R_\varepsilon(\mathrm{DISJ}\_n)=\Omega(n)
$$

증명의 요지. 좌표마다 $(1,1)$ 이 나오지 않는 분포 $\mu$ 를 쓰면 $\mu^n$ 의 입력은 늘 서로소다. 이때 $\mathrm{DISJ}\_n$ 의 규칙은 좌표 $i$ 에서 AND 를 계산하는 규칙이 된다. 다른 좌표가 모두 $0$ 을 내므로 답이 $x_i\wedge y_i$ 의 부정으로 정해지기 때문이다. 직합 정리의 논증으로 $R_\varepsilon(\mathrm{DISJ}\_n)\ge n\cdot\mathrm{IC}\_\mu(\mathrm{AND},\varepsilon)$ 이다.

남은 것은 $\mathrm{IC}\_\mu(\mathrm{AND},\varepsilon)$ 이 $\varepsilon\lt 1/2$ 에만 의존하는 양의 상수 이상이라는 것이다. 입력 $(a,b)$ 에서의 대화 기록 분포를 $\Pi_{ab}$ 라 하면, 사적 동전 규칙에서 두 분포 사이의 Hellinger 거리(Hellinger distance) $h$ 가 다음을 만족한다.

$$
h(\Pi_{00},\Pi_{11})=h(\Pi_{01},\Pi_{10})
$$

$\Pi_{00}$ 과 $\Pi_{11}$ 은 답이 달라 멀리 떨어져 있다. 그러므로 $\Pi_{01}$ 과 $\Pi_{10}$ 도 멀고, 삼각부등식으로 둘 가운데 하나는 $\Pi_{00}$ 에서 멀다. 그 거리의 제곱에 상수를 곱한 값이 $I(X;\Pi\mid Y)$ 나 $I(Y;\Pi\mid X)$ 의 하한이 된다.

M. Braverman, A. Garg, D. Pankratov, O. Weinstein 은 오류가 $0$ 으로 갈 때의 상수를 정확히 구했다[^4]. $R_\varepsilon(\mathrm{DISJ}\_n)$ 은 $C\_{\mathrm{DISJ}}\cdot n+o(n)$ 이고 $C\_{\mathrm{DISJ}}\approx 0.4827$ 이다.

## 압축과 분리

정보 비용이 작은 규칙을 통신이 적은 규칙으로 바꿀 수 있으면 정보 하한과 통신 하한이 같아진다. B. Barak, M. Braverman, X. Chen, A. Rao 는 통신 $C$, 내부 정보 비용 $I$ 인 규칙을 통신 $\tilde O(\sqrt{I\cdot C})$ 인 규칙으로 바꿨다[^5]. 외부 정보 비용 $I^{\mathrm{ext}}$ 에 대해서는 통신 $I^{\mathrm{ext}}$ 에 $C$ 의 로그 다항식을 곱한 규칙으로 바꿨다.

일반적인 압축은 불가능하다. A. Ganor, G. Kol, R. Raz 는 정보 복잡도가 $O(k)$ 이고 분포 통신 복잡도가 $2^{\Omega(k)}$ 인 불 함수를 만들었다[^6].

# 활용

- 스트리밍 알고리즘의 메모리 하한. Bar-Yossef 등은 같은 방법을 여러 사람이 나눠 가진 집합의 서로소 판정으로 넓혀, 스트림의 $k$ 차 빈도 모멘트를 근사하는 알고리즘의 메모리 하한을 증명했다[^3]. [AMS 스케치](ams-sketch.md)가 다루는 $k\ge 3$ 의 하한이 이 계열이다.
- 직합 문제. 정보 복잡도의 직합 정리로 $f$ 를 $n$ 번 푸는 통신량이 한 번 푸는 통신량의 $n$ 배에 가까운지를 정보 비용과 압축의 문제로 바꾼다.
- [선형계획법](linear-programming.md)의 확장 표현 하한. M. Braverman 과 A. Moitra 는 정보 복잡도로, [클릭 문제](clique-problem.md)를 근사하는 다면체의 [확장 복잡도](extension-complexity.md) 하한을 증명했다[^7].

[^1]: A. Chakrabarti, Y. Shi, A. Wirth, A. C.-C. Yao, "Informational complexity and the direct sum problem for simultaneous message complexity", Proceedings of the 42nd IEEE Symposium on Foundations of Computer Science (2001), 270–278.
[^2]: M. Braverman, A. Rao, "Information equals amortized communication", IEEE Transactions on Information Theory 60 (2014), 6058–6069.
[^3]: Z. Bar-Yossef, T. S. Jayram, R. Kumar, D. Sivakumar, "An information statistics approach to data stream and communication complexity", Journal of Computer and System Sciences 68 (2004), 702–732.
[^4]: M. Braverman, A. Garg, D. Pankratov, O. Weinstein, "From information to exact communication", Proceedings of the 45th ACM Symposium on Theory of Computing (2013), 151–160.
[^5]: B. Barak, M. Braverman, X. Chen, A. Rao, "How to compress interactive communication", SIAM Journal on Computing 42 (2013), 1327–1363.
[^6]: A. Ganor, G. Kol, R. Raz, "Exponential separation of information and communication for boolean functions", Journal of the ACM 63 (2016), Article 46.
[^7]: M. Braverman, A. Moitra, "An information complexity approach to extended formulations", Proceedings of the 45th ACM Symposium on Theory of Computing (2013), 161–170.

# 연관 문서

## 선수지식

- [통신 복잡도](communication-complexity.md)
- [KL divergence](kl-divergence.md)

## 더 알아보기

아직 연결한 문서가 없다.

#complexity #information_theory #computation

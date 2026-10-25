# 자연 증명

# 개요

**자연 증명(natural proof)** 은 회로 하한을 증명할 때 "구성적"이고 "넓은" 성질을 찾아, 그 성질을 가진 함수는 작은 회로로 계산되지 않는다는 꼴로 논증하는 증명이다. A. A. Razborov 와 S. Rudich 가 1994 년에 이 꼴을 정의하고, 충분히 강한 유사난수 함수가 존재하면 자연 증명으로는 다항 크기 [불 회로](boolean-circuits.md)의 하한을 얻을 수 없다는 것을 증명했다[^1].

알려진 회로 하한의 증명 대부분이 이 꼴이다. 상수 깊이 회로가 홀짝 함수를 계산하지 못한다는 [Håstad 스위칭 보조정리](switching-lemma.md)의 하한이 그 예다. 그래서 이 정리는 [P 대 NP 문제](p-np.md)를 회로 하한으로 풀려는 시도가 넘어야 할 장벽의 하나다.

# 직관

회로 하한은 어떤 함수 $f$ 가 크기 $s$ 의 회로로 계산되지 않는다는 주장이다. 증명은 흔히 성질 하나를 정한다. "무작위로 변수 대부분을 고정해도 상수가 되지 않는다" 같은 성질이 작은 회로가 계산하는 함수에는 없고 $f$ 에는 있다는 것을 보인다. Håstad 의 상수 깊이 하한이 이렇게 되어 있다.

이런 성질은 대개 두 가지 특징을 갖는다. 함수의 진리표 $2^n$ 비트를 받아 그 성질이 있는지 진리표 길이의 다항식 시간에 판정된다. 그리고 무작위로 고른 함수의 상당한 비율이 그 성질을 갖는다. 이 둘을 갖춘 성질이 작은 회로의 함수를 모두 배제하면, 그 성질의 판정 알고리즘은 작은 회로로 계산되는 함수와 무작위 함수를 가르는 구별자가 된다. [유사난수 생성기](pseudorandom-generators.md)에서 만든 유사난수 함수는 작은 회로로 계산되면서 무작위 함수와 구별되지 않아야 하므로, 두 가정이 함께 성립할 수 없다.

# 정의

$F_n$ 을 $n$ 변수 불 함수 전체의 집합이라 하고, 함수 $f\in F_n$ 를 길이 $N=2^n$ 의 진리표로 적는다. 성질 $\mathcal C=(\mathcal C_n)$, $\mathcal C_n\subseteq F_n$ 에 대해 다음을 정의한다.

- **구성적(constructive)**: 진리표를 받아 $f\in\mathcal C_n$ 인지를 시간 $N^{O(1)}=2^{O(n)}$ 에 판정할 수 있다.
- **넓음(largeness)**: $\lvert\mathcal C_n\rvert\ge 2^{-O(n)}\lvert F_n\rvert$ 이다.
- **유용함(usefulness)**: $\mathcal C_n$ 에 드는 함수들의 족은 다항 크기 회로로 계산되지 않는다.

구성적이고 넓은 성질 가운데 유용한 것이 있으면 그 성질에서 나오는 하한 증명을 **자연 증명** 이라 한다.

# 성질

## Razborov–Rudich 정리

정리. 다항 크기 회로로 계산되고, 키 길이 $m$ 에 대해 크기 $2^{m^\varepsilon}$ 의 회로가 확률 차 $2^{-m^\varepsilon}$ 이상으로 구별하지 못하는 유사난수 함수 족이 어떤 $\varepsilon\gt 0$ 에 대해 존재하면, 다항 크기 회로에 대해 유용한 구성적이고 넓은 성질은 없다[^1].

증명의 요지. 유사난수 함수 족 $\lbrace F\_k\rbrace$ 의 키가 $m$ 비트이고 입력이 $n=m^{\varepsilon/2}$ 비트라 하자. 성질 $\mathcal C$ 가 있다고 하자. $F\_k$ 는 다항 크기 회로로 계산되므로 유용함에 따라 $F\_k\notin\mathcal C_n$ 이다. 무작위 함수는 넓음에 따라 확률 $2^{-O(n)}$ 이상으로 $\mathcal C_n$ 에 든다. 질의 $2^n$ 번으로 진리표를 모두 얻고 구성성에 따라 $2^{O(n)}$ 시간에 $\mathcal C_n$ 의 소속을 판정하면, 크기 $2^{O(n)}=2^{O(m^{\varepsilon/2})}$ 의 회로가 $F\_k$ 와 무작위 함수를 $2^{-O(n)}$ 의 차로 구별한다. 회로 크기와 확률 차가 모두 안전성의 한도를 넘으므로 가정에 어긋난다.

## 자연 증명인 하한

- 상수 깊이 회로가 홀짝을 계산하지 못한다는 Håstad 하한. 무작위 제한 뒤에 상수가 되지 않는다는 성질이 구성적이고 넓다. 유사난수 함수가 $\mathrm{AC}^0$ 에서 계산되지 않으므로 정리와 모순되지 않는다.
- A. A. Razborov 의 단조 회로 하한과 법 $p$ 게이트 상수 깊이 회로의 [Razborov–Smolensky 정리](razborov-smolensky.md)도 자연 증명으로 쓰인다[^1].

## 다른 장벽과의 비교

[시간 계층 정리](time-hierarchy-theorem.md)의 대각선 논법은 상대화되어서 Baker–Gill–Solovay 정리에 막힌다. 자연 증명은 상대화와 무관한 장벽이고, 회로 하한의 조합적 논증을 막는다. 대각선 논법은 특정한 하나의 함수를 다루고 넓음을 만족하지 않으므로 자연 증명이 아니다.

# 활용

- [P 대 NP 문제](p-np.md)의 증명 장벽. 다항 크기 회로 하한으로 $\mathrm P\ne\mathrm{NP}$ 를 보이려면 자연 증명이 아닌 논증, 곧 구성성이나 넓음 가운데 하나를 버린 논증이 필요하다.
- [Nisan–Wigderson 생성기](nisan-wigderson-generator.md)와의 관계. 탈무작위화는 회로 하한을 가정으로 쓰고, 자연 증명 장벽은 유사난수 함수를 가정으로 써서 회로 하한의 증명을 막는다. 두 결과가 회로 하한과 유사난수성의 관계를 반대 방향에서 다룬다.
- R. Williams 의 $\mathrm{NEXP}\not\subseteq\mathrm{ACC}^0$ 은 회로 충족가능성 알고리즘에서 대각선 논법으로 하한을 얻어, 넓음을 만족하지 않는 경로로 이 장벽을 피했다[^2].

[^1]: A. A. Razborov, S. Rudich, "Natural proofs", Journal of Computer and System Sciences 55 (1997), 24–35. 학회 판은 Proceedings of the 26th ACM Symposium on Theory of Computing (1994), 204–213.
[^2]: R. Williams, "Nonuniform ACC circuit lower bounds", Journal of the ACM 61 (2014), Article 2.

# 연관 문서

## 선수지식

- [불 회로](boolean-circuits.md)
- [유사난수 생성기](pseudorandom-generators.md)

## 더 알아보기

아직 연결한 문서가 없다.

#complexity #computation #cryptography

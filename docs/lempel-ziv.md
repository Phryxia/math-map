# Lempel–Ziv 압축

# 개요

**Lempel–Ziv 압축(Lempel–Ziv compression)** 은 앞에서 이미 나온 조각을 가리키는 짧은 참조로 기호열을 줄이는 무손실 압축 방법이다. $\mathtt{abcabcabcabc}$ 를 보낼 때 처음 $\mathtt{abc}$ 는 그대로 보내고, 나머지 아홉 글자는 "세 글자 앞에서 시작해 아홉 글자를 복사하라" 는 참조 하나로 보낼 수 있다. 이 방법은 기호가 나올 확률을 미리 알지 못해도 반복을 찾아 참조로 바꾸고, 긴 기호열에서는 기호당 부호 길이가 원천의 엔트로피율에 다가간다.

# 직관

Lempel–Ziv 압축은 원천의 확률 분포를 모르는 채로, 기호열을 앞에서 이미 나온 조각을 가리키는 짧은 참조들로 바꾸는 무손실 압축 방법이다. 앞의 일정 범위에서 가장 긴 일치를 찾는 LZ77 과, 기호열을 서로 다른 구절로 자르는 LZ78 이 있다. Ziv 와 Lempel 이 1977 년과 1978 년에 발표했다[^1][^2].

정상(stationary)이고 에르고딕(ergodic)인 원천에서 LZ78 의 기호당 부호 길이는 [무손실 부호화 정리](source-coding.md)의 하한인 엔트로피율에 수렴한다. 분포를 알고 부호를 짜는 [Huffman 부호](huffman-coding.md)와 달리 같은 알고리즘이 모든 이런 원천에서 최적에 다가가므로 보편 부호(universal code)라 한다.

$\mathtt{abcabcabcabc}$ 를 보낸다. 처음 $\mathtt{abc}$ 는 그대로 보내고, 나머지 아홉 글자는 "세 글자 앞에서 시작해 아홉 글자를 복사하라" 는 참조 하나로 보낼 수 있다. 복사하는 동안 복사된 글자가 다시 원본이 되므로, 겹쳐 복사해도 받는 쪽은 한 글자씩 따라 쓰며 복원한다.

받는 쪽은 이미 복원한 기호열만 보고 참조를 해석하므로 확률 모형을 주고받을 필요가 없다. 반복이 많은 기호열일수록 참조 하나가 덮는 길이가 길어지고 압축이 잘 된다. 원천이 정해진 분포에서 나오면 기호열이 길어질수록 자주 나오는 조각이 먼저 사전에 들어가고, 참조의 수가 그 분포의 엔트로피에 맞춰진다.

# 정의

## LZ77

위치 $i$ 까지 부호화했을 때, 앞의 길이 $w$ 인 창 안에서 시작해 위치 $i$ 부터의 기호열과 가장 길게 일치하는 조각을 찾는다. 일치의 시작이 $o$ 칸 앞이고 길이가 $k$ 이면 세 값 $(o,k,x_{i+k})$ 를 내고 위치 $i+k+1$ 로 간다. 일치가 없으면 $(0,0,x_i)$ 를 낸다. 일치하는 조각은 위치 $i$ 를 넘어 이어져도 된다.

## LZ78

기호열을 앞에서부터 구절로 자르되, 각 구절은 앞서 나온 구절 가운데 하나에 기호 하나를 붙인 것으로서 지금까지 나오지 않은 가장 짧은 것으로 한다. 구절마다 앞 구절의 번호와 붙인 기호의 쌍을 낸다. 빈 구절의 번호는 $0$ 이다. $\mathtt{aababbbaab}$ 는 다음과 같이 잘린다.

$$
\mathtt a\mid\mathtt{ab}\mid\mathtt{abb}\mid\mathtt b\mid\mathtt{aa}\mid\mathtt b
$$

내는 쌍은 $(0,\mathtt a),(1,\mathtt b),(2,\mathtt b),(0,\mathtt b),(1,\mathtt a),(4,\cdot)$ 이다. 마지막 구절은 기호열이 끝나 앞 구절과 같을 수 있다. 구절들은 마디마다 구절 하나를 둔 [트라이](tries.md)를 이루고, 새 구절은 트라이를 따라 내려가다 간선이 없는 자리에서 잎 하나를 붙인 것이다.

# 성질

## 구절 수의 상한

정리. 길이 $n$ 인 이진 기호열의 LZ78 구절 수 $c(n)$ 은 $n\to\infty$ 에서 $0$ 으로 가는 $\varepsilon\_n$ 에 대해 다음을 만족한다[^3].

$$
c(n)\le\frac{n}{(1-\varepsilon_n)\log_2 n}
$$

증명의 요지. 마지막을 뺀 구절들은 서로 다르다. 서로 다른 이진 문자열 $c$ 개의 길이 합은 짧은 것부터 채울 때 가장 작고, 길이 $j$ 인 문자열은 $2^j$ 개뿐이다. 길이 $k$ 이하를 모두 쓰면 $c=2^{k+1}-2$ 개이고 길이 합은 $\sum_{j\le k}j2^j=(k-1)2^{k+1}+2$ 다. 그래서 길이 합 $n$ 은 대략 $c\log_2 c$ 이상이고, 이것을 $c$ 에 대해 풀면 위 부등식이 나온다.

LZ78 의 부호 길이는 구절마다 번호 $\lceil\log_2 c(n)\rceil$ 비트와 기호 $1$ 비트이므로 $c(n)(\log_2 c(n)+2)$ 비트 이하이고, 위 상한으로 이 값은 $n(1+o(1))$ 이하다. 압축이 안 되는 기호열에서도 손해가 $o(n)$ 이다.

## 보편성

정리. 정상이고 에르고딕인 이진 원천 $X_1,X_2,\dots$ 의 엔트로피율을 $H$ 라 하면, LZ78 의 부호 길이 $\ell(X_1\cdots X_n)$ 은 확률 $1$ 로 다음을 만족한다[^3].

$$
\limsup_{n\to\infty}\frac{\ell(X_1\cdots X_n)}{n}\le H
$$

증명의 요지. 구절들이 서로 다르다는 것만으로, 어떤 $k$ 차 Markov 근사 $Q_k$ 에 대해서도 $c(n)\log_2 c(n)\le-\log_2 Q_k(X_1\cdots X_n)+o(n)$ 이 성립한다(Ziv 부등식). 오른쪽을 $n$ 으로 나눈 값은 [에르고딕 정리](ergodic-theorem.md)로 $k$ 차 조건부 엔트로피에 수렴하고, $k\to\infty$ 이면 그 값이 $H$ 로 내려간다.

# 활용

- 범용 압축기. `gzip` 과 PNG(portable network graphics)의 DEFLATE 형식은 LZ77 의 참조를 Huffman 부호로 다시 줄인다. LZW(Lempel–Ziv–Welch)는 LZ78 에서 기호를 따로 보내지 않게 고친 것이고 GIF(graphics interchange format) 형식이 쓴다.
- 복잡도의 척도. 기호열의 LZ78 구절 수는 계산할 수 있는 복잡도의 척도로 쓰이고, 계산할 수 없는 [Kolmogorov 복잡도](kolmogorov-complexity.md)의 위쪽 근사가 된다.
- 압축으로 재는 거리. 두 기호열을 이어 붙여 압축한 길이와 따로 압축한 길이를 비교하면 두 기호열이 정보를 얼마나 공유하는지 추정한다.

[^1]: J. Ziv, A. Lempel, "A universal algorithm for sequential data compression", IEEE Transactions on Information Theory 23 (1977), 337–343.
[^2]: J. Ziv, A. Lempel, "Compression of individual sequences via variable-rate coding", IEEE Transactions on Information Theory 24 (1978), 530–536.
[^3]: T. M. Cover, J. A. Thomas, *Elements of Information Theory*, 2nd ed., Wiley, 2006, §13.5.

# 연관 문서

## 선수지식

- [무손실 부호화 정리](source-coding.md)

## 더 알아보기

아직 연결한 문서가 없다.

#information_theory #algorithms #probability

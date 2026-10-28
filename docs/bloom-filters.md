# Bloom 필터

# 개요

**Bloom 필터(Bloom filter)** 는 원소를 그대로 저장하지 않고 비트 몇 개만 표시해 두어, 어떤 원소가 집합에 있는지 적은 메모리로 답하는 자료구조다. 웹 캐시가 지금까지 본 주소 $n$ 개를 기억하려 할 때 주소를 그대로 저장하면 메모리가 주소의 길이에 비례한다. Bloom 필터는 주소마다 해시 함수 여러 개로 고른 비트를 $1$ 로 만들어 두고 질의한 주소의 비트가 모두 $1$ 이면 있다고 답하므로, 들어 있는 원소에는 언제나 맞게 답하고 없는 원소에는 작은 확률로만 틀린다.

# 직관

Bloom 필터는 집합에 원소가 들어 있는지 묻는 질의에 답하는 비트 배열 자료구조로서, 들어 있는 원소에는 언제나 "있다" 고 답하고 들어 있지 않은 원소에는 작은 확률 $\varepsilon$ 으로만 "있다" 고 잘못 답하는 것이다. Bloom 이 1970 년에 제안했다[^1].

원소 하나에 약 $1.44\log\_2(1/\varepsilon)$ 비트를 쓰고, 이 값은 원소 자체의 크기와 무관하다. 비트의 자리는 [범용 해시족](universal-hashing.md)에서 고른 함수 여러 개로 정한다.

웹 캐시가 지금까지 본 주소 $n$ 개를 기억하고 새 주소가 그 가운데 있는지 묻는다. 주소를 그대로 저장하면 메모리가 주소의 길이에 비례한다. 그래서 $m$ 비트 배열과 해시 함수 $h$ 하나를 두고, 주소 $x$ 를 넣을 때 $h(x)$ 번 비트를 $1$ 로 만든다. 질의는 $h(x)$ 번 비트가 $1$ 인지 본다.

넣은 주소의 비트는 $1$ 이므로 "없다" 고 잘못 답하는 일은 없다. 넣지 않은 주소 $y$ 의 비트가 다른 주소 때문에 $1$ 이 되어 있으면 "있다" 고 잘못 답한다. 한 비트가 $n$ 번 모두 비켜 갈 확률은 $(1-1/m)^n\approx e^{-n/m}$ 이므로, $m=8n$ 이면 잘못 답할 확률이 $1-e^{-1/8}\approx 0.118$ 이다.

함수 $k$ 개로 비트 $k$ 개를 켜고, 질의에서는 $k$ 개가 모두 $1$ 일 때만 "있다" 고 답한다. 배열에 $1$ 이 더 많아지지만 넣지 않은 주소가 $k$ 개를 모두 맞혀야 틀린다. $m=8n$, $k=6$ 이면 잘못 답할 확률이 $(1-e^{-6/8})^6\approx 0.022$ 로 줄어든다. 이 배열과 질의 규칙이 Bloom 필터다.

# 정의

$m$ 비트 배열 $A$ 를 $0$ 으로 채우고 함수 $h\_1,\dots,h\_k:U\to\lbrace 0,\dots,m-1\rbrace$ 를 고른다.

- 삽입. $x$ 를 넣으면 모든 $i$ 에 대해 $A\lbrack h\_i(x)\rbrack=1$ 로 둔다.
- 질의. 모든 $i$ 에 대해 $A\lbrack h\_i(y)\rbrack=1$ 이면 "있다", 아니면 "없다" 고 답한다.

넣지 않은 $y$ 에 "있다" 고 답하는 것을 **거짓 양성(false positive)** 이라 한다.

# 성질

## 거짓 양성 확률

해시값들이 독립이고 균등하다고 가정한다. $n$ 개를 넣은 뒤 정해진 비트가 $0$ 일 확률은 $p=(1-1/m)^{kn}\approx e^{-kn/m}$ 이다. 넣지 않은 $y$ 의 비트 $k$ 개가 모두 $1$ 일 확률은 다음으로 근사된다.

$$
\varepsilon\approx(1-e^{-kn/m})^k
$$

비트들이 $1$ 인 사건은 서로 독립이 아니어서 이 식은 근사이고, 정확한 값은 이보다 조금 크다[^2].

## 최적의 함수 개수

$p=e^{-kn/m}$ 으로 두면 $k=-(m/n)\ln p$ 이고 다음이 성립한다.

$$
\ln\varepsilon=k\ln(1-p)=-\frac mn\ln p\thinspace\ln(1-p)
$$

$\ln p\thinspace\ln(1-p)$ 는 $p$ 와 $1-p$ 를 바꿔도 같고 $p=1/2$ 에서 가장 크다. 그래서 최적은 배열의 절반이 $1$ 일 때이고, 그때 $k=(m/n)\ln 2$, $\varepsilon=2^{-k}$ 다. $\varepsilon$ 을 정하면 필요한 비트 수는 다음이다.

$$
m=\frac{n\log\_2(1/\varepsilon)}{\ln 2}\approx 1.44\thinspace n\log\_2(1/\varepsilon)
$$

## 공간의 하한

거짓 양성 확률이 $\varepsilon$ 이하이고 "없다" 고 잘못 답하지 않는 어떤 자료구조도, 큰 전체 집합에서 고른 $n$ 개를 담으려면 대략 $n\log\_2(1/\varepsilon)$ 비트가 필요하다[^3]. Bloom 필터는 이 하한의 $1/\ln 2\approx 1.44$ 배를 쓴다.

## 두 함수로 만드는 k 개의 함수

$h\_i(x)=h(x)+i\thinspace g(x) \bmod m$ 처럼 함수 두 개 $h,g$ 로 $k$ 개를 만들어도 거짓 양성 확률의 극한값이 같다[^4]. 해시 계산이 두 번으로 줄어든다.

## 삭제

비트를 $0$ 으로 되돌리면 같은 비트를 쓰는 다른 원소가 "없다" 로 바뀌므로 삭제를 지원하지 않는다. 비트 대신 작은 계수기를 두고 삽입에서 더하고 삭제에서 빼는 변형이 계수 Bloom 필터(counting Bloom filter)다[^5]. [뻐꾸기 해싱](cuckoo-hashing.md)의 칸에 지문을 두는 뻐꾸기 필터도 삭제를 지원한다.

# 활용

- 저장 엔진. 디스크의 정렬된 파일마다 Bloom 필터를 두어, 찾는 키가 없는 파일을 디스크를 읽지 않고 건너뛴다.
- 캐시와 네트워크. 프록시 서버들이 서로의 캐시 내용을 Bloom 필터로 요약해 주고받는다[^5].
- 맞춤법 검사. Bloom 의 원래 응용이 사전 전체를 메모리에 두지 않고 단어가 사전에 있는지 거르는 것이었다[^1].
- 스트림 요약. [Count-Min 스케치](count-min-sketch.md)는 해시 함수 여러 개로 자리를 고르는 같은 방법에 비트 대신 계수기를 두어 빈도를 추정한다.

[^1]: B. H. Bloom, "Space/time trade-offs in hash coding with allowable errors", Communications of the ACM 13 (1970), 422–426.
[^2]: P. Bose, H. Guo, E. Kranakis, A. Maheshwari, P. Morin, J. Morrison, M. Smid, Y. Tang, "On the false-positive rate of Bloom filters", Information Processing Letters 108 (2008), 210–213.
[^3]: L. Carter, R. Floyd, J. Gill, G. Markowsky, M. Wegman, "Exact and approximate membership testers", STOC 1978, 59–65.
[^4]: A. Kirsch, M. Mitzenmacher, "Less hashing, same performance: building a better Bloom filter", Random Structures & Algorithms 33 (2008), 187–218.
[^5]: L. Fan, P. Cao, J. Almeida, A. Z. Broder, "Summary cache: a scalable wide-area web cache sharing protocol", IEEE/ACM Transactions on Networking 8 (2000), 281–293.

# 연관 문서

## 선수지식

- [범용 해시족](universal-hashing.md)

## 더 알아보기

아직 연결한 문서가 없다.

#data_structures #algorithms #probability
